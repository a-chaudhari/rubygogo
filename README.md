# RubyGogo

[Rubygogo Live][heroku]
[heroku]: http://rubygogo.herokuapp.com

![rubygogo's home page](/docs/home.png)

Rubygogo is a full-stack web application inspired by Rubygogo.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

# Features & Implementation

## Campaigns and Perks
Campaigns and any data describing them are stored in one table in the database.  A user foreign key connects the authoring user account to the campaign.  Perks are stored in a different perks table due to the many-to-one relationship with campaigns. Comments and updates are likewise stored in their own tables with a campaign_id connecting them to their respective parent campaigns.

The campaigns can be rendered in three forms.  First is a complete version used for the campaign's show page.  This view also brings in other information such as number of contributors and total funds raised.
![rubygogo's show page](/docs/rgg.png)

 Second is a reduced subset required to render a campaign tile.  Campaign tiles are used when browsing campaign categories.  
 ![campaign tile](/docs/tile.png)

 And lastly, a campaign can be rendered in its unmodified raw data fields.  This is used when a uer is creating or editing a campaign. See below for more on this.



## Contributions
Contributions are stored on their own table.  They link users and campaigns and also store amounts, perks chosen (if any), and visibility settings, along with a timestamp. These are requested through either the campaign or user association as contribution history can be seen on the site by user or by campaign.

## Campaign Editing

 ![editor view](/docs/editor.png)

Campaign editing is handled by a dedicated editor component.  The editor will request the raw data fields from the server.  Assuming the user is authorized to do this, the server will send them back.  The user can then manipulate the fields and then either save, launch, or preview.  

![preview mode](/docs/preview.png)


Save will simply update the modified fields.  Preview will save the fields and allow the user to see the campaign without leaving the editor component.  And lastly, launch will save the campaign, toggle the `status` field to `open`, which allows others to see the campaign, and then redirect the user to the newly launched campaign.

The editor component can also modify perks.  As Perks are stored on their own table, perks has its own dedicated api calls to create, update, and destroy.

## Users and Profiles
The users table stores all profile and user data, including password digests and session tokens.  Users can be rendered in a private mode or public mode.  Private mode is only sent out when the user is requesting his or her own profile.  Otherwise a redacted version is sent out for public display.  The api call is the same in either case.  The server will send the appropriate version.  The private version can also be used the by profile editor component to allow the user to change his or her own profile.

## Categories


The category table holds a short list of categories along with metadata.  Campaign entries have a foreign key that points to the category they fall under.

The category api requires the category to display along with the filters to be used.  It can also take an optional offset parameter that can be used to request additional search results after the initial 12.

Current search filters include: ending soonest, most funded, campaign status, category, percent funded, and funding type.  More can be easily supported.

![filter view](/docs/filters.png)

The filters work in the backend by taking the filter parameters and building a single WHERE ActiveRecord query.

The front end category component presents all filter options to the user and allows live updating and allows the user to request more pages.  Any additional pages are appended to the existing results.

## Dynamic UI Generation

The site's front-end code uses UI generation elements in many places to DRY up code and improve readability and allow for faster development.  The filter component in the above picture is one such example.  

````javascript
// portion of code from render()
<div className={"dropdown-filter-mainbox" + (this.state.dropdown ? " dropdown-opened": "")}>
  {this.filterBox('Percent funded', 'funded',
    {n:'All',v:'0'},
    {n:'0-25%',v:'1'},
    {n:'25-75%',v:'2'},
    {n:'75-100+%',v:'3'})}

  {this.filterBox('Goal type', 'goal_type',
    {n:'All',v:'all'},
    {n:'Fixed',v:'fixed'},
    {n:'Flexible',v:'flexible'})}

  {this.filterBox('Project status','status',
    {n:'All',v:'all'},
    {n:'Open',v:'open'},
    {n:'Ended',v:'ended'})}
</div>

// ...

filterBox(name, value, ...bubbles){
  const entries = bubbles.map(bub=>{
    return(
      <div key={"bub"+value+bub.v}
            onClick={this.updateBox(value,bub.v).bind(this)}
            className="dropdown-filter-line">

        {this.circle(this.state.filter[value]==bub.v)}
        <span>{bub.n}</span>
      </div>
    );
  })

  return(
    <div className="dropdown-filter-minibox">
      <h3 className="dropdown-filter-minibox-title">{name}</h3>
      {entries}
    </div>
  );
}
````

`filterBox` is a element generation method that: creates a container div, dynamically generates custom radio buttons with labels, connects their selected state to their respective state variable, and sets up onClick handlers.

While the same result could be had by manually entering everything, this would not only create large and repetitive blocks of code , but would also make adding or removing filters more time consuming.

## Front Page Carousels

![sliders](/docs/sliders.gif)

The front page has two carousels.  The top one is the `topfive` component.  Which grabs the top five list using a unique api call.  These values can be set to whatever the site administrator wishes.  

The animation is done via CSS transformations.  The contents of the carousel are stored in an array. When the user clicks on either the left or right side, a css animation is triggered that moves the inner div container in the appropriate direction.  Immediately after the animation is complete, the array contents are modified to reflect the new on-screen arrangement. When React re-renders the page, the position of the old post-transform elements will be identical to the new pre-transform positions of the new modified array elements.  The user will perceive no change and the component will be prepared for the next animation cycle.

The 2nd carousel is essentially a reduced version of the category component.  It uses the same api but displays the content in a different UI element.  It's not capable of requesting more pages or modifying the filters beyond the presets given.  It utilizes animations similarly to the primary carousel.

## Fuzzy Search
This site supports fuzzy searching.  The search function uses trigram searching provided through the pg_tgrm module that ships with PostgreSQL. The search function will accept a query (and optional offset for pagination) and search through all campaign titles and taglines. Results are sent 12 results at a time.

The module settings have been tuned to be significantly more "fuzzy" than default settings.  This yielded the best results.

# Future directions

## Overhauled Editor
The current editor can be overhauled to provide more meaningful and immediate feedback.  Currently any invalid fields are labeled as such, but the user needs to go page by page to find them.  The real Indiegogo has an errors header that is persistent across pages.  This allows the user an easier experience.
