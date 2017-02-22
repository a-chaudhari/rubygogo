export const fetchPerks = (id)=> (
  $.ajax({
    method: 'GET',
    url: `/api/campaigns/${id}/perks`
  })
);

export const createPerk = perk =>(
  $.ajax({
    method: 'POST',
    url: `/api/campaigns/${perk.campaign_id}/perks`,
    data: {perk}
  })
);

export const deletePerk = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/perks/${id}`
  })
);

export const updatePerk = perk =>(
  $.ajax({
    method: 'PATCH',
    url: `/api/perks/${perk.id}`,
    data: {perk}
  })
);
