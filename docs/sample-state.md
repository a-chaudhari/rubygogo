```js
{
  /*present for every page at all times*/
  currentUser:{
    id:1,
    full_name: "Amit Chaudhari"
    username: "achaudhari"
  },

  {
    forms:{
      signUp: { errors: []},
      logIn: { errors: []},
      createCampaign: { errors [] }
    }
  },


/*shown when a user is browsing for a category*/
  {
    explore:{
      category:{
        url: '/category/1234'
        image: 'url goes here.bmp'
      }
    }
  },


/*  stuff needed to render a campaign view page*/
  {
    campaign:{
      comments:{
        author: "bob"
        author_url: "/profiles/1234"
        datetime: "1/1/2017"
        type: "comment"
        body: "cool story bro"
      },
      contributions:{
        1:{
          user_id: 1234,
          amount: 100,
          datetime: 1/1/2017
        }
      },
      status:{
        current_cash: 100000,
        required_cash: 1000000,
        status: "active",
        time_left: "about 1 day left"
      },
      perks{
        perk{
          remaining: 10,
          title: "Free tshirt"
          body: "a tshirt with our logo"
          amount: "100"
          eta: "January 2018"
        }
      },
      info{
        img_url: "some url.jpg"
        title: "Flux capacitor"
        description: "help me build a delorian!"
      }
    }
  },


  profile:{

    1:{
      username: "achaudhari"
      first name: "Amit"
      last name: "Chaudhari"
      short_desc: "a cool guy"
      about_me: "insert witty description here"
      profile_img_url: "url goes here.tiff"
      avatar_img_url: "url goes here.jpg.bat"
    }
  }


}
```
