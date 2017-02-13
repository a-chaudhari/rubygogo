## Component Hierarchy

**Header**
- login box
-	sign up box
-	search field

**index page**
-	top carusel
-	double arrow scrolling box
-	category list

**campaign page**
-	perk box
-	dynamic box
  +	story
  +	updates
  +	comments
  +	backers

**explore page**
-	double arrow scrolling box

**profile page**
-	dynamic box
  +	campaign list
  +	activity
  +	contribution
  +	profile page
-	profile edit page

**search page**
-	search field
-	campaign listing box

**create campaign page**
-	preview mode (campaign page)
-	basics page
  +	image selector
-	story page
  +	image selector
-	perks page
  +	create perk from

**category view**
-	campaign listing box

## Routes

|Path|Component|
|----|---------|
|"/home"|"index page"
|"/campaigns/:id"|"campaign page"
|"/profiles/:id"|"user profile"
|"/category/"|"explore page"
|"/category/:id"|"category view"
|"/search"|"search page"
