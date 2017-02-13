# schema information

## users
|column name|data type| details|
|------------------------------|
|id|integer|
|username|string|
|email|string|
|password_digest|string|
|session_token|string|
|first name| string|
|last name|string|
|country|string|
|city|string|
|postal code|string|
|short_desc|text|
|about_me|text|
|profile_img_url|string|
|avatar_img_url|string|

## campaigns
|column name|data type| details|
|------------------------------|
|title|string|
|goal amount|integer|
|currency|string|
|tagline|string|
|campaign_card_img_url|string|
|category_id|integer|
|duration|integer|
|funding_type|string|
|video_url|string|
|main_img_url|string|
|overview_img_url|string|
|campaign_pitch|text|
|current_cash|integer|
|status|string|

## perks
|column name|data type| details|
|------------------------------|
|title|string|
|description|string|
|campaign_id|integer|
|price|integer|
|number_available|integer|
|estimated delivery date|datetime|

## contributions
|column name|data type| details|
|------------------------------|
|user_id|integer|
|campaign_id|integer|
|amount|integer
|perk_id|integer
|timestamps|datetime|
|visibility|string|

## comments
|column name|data type| details|
|------------------------------|
|user_id|integer|
|campaign_id|integer|
|timestamps|datetime|
|body|text|
|type|string|

## tags
|column name|data type| details|
|------------------------------|
|name|string|

## taggings
|column name|data type| details|
|------------------------------|
|user_id|integer|
|campaign_id|integer|
|tag_id|integer|
