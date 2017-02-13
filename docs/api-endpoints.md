# API Endpoints
## HTML API
### Root
- get /

### profile
- get /profile/:id

### campaign
- get /campaign/:id
- get /campaign/new

### category
- get /category/
- get /category/:id

browsing profiles, campaigns, and seeing a campaign will be distinct activities and will require a refresh.

## JSON API
### Users
- post /api/profile/:id
- patch /api/profile/:id
- get /api/profile/:id

### session
- post /api/session
- delete /api/session

### campaign
- post /api/campaign
- get /api/campaign/:id
- patch /api/campaign/:id

## comments
- post /api/campaign/:id/comments
- get /api/campaign/:id/comments

### contributions
- post /api/campaign/:id/contributions
- get /api/campaign/:id/contributions

### categories
- get /api/categories
- get /api/categories/:id
