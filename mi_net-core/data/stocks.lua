
--[[

    Reference for creating stocks
    Label = name that will appear on screen
    Types = filters for the stock
    Cost.Inc = How much it can increase in interval
    Cost.Dec = How much it can Decrease in interval

    ['stock'] = {
        acronym = 'ACR',
        label = 'name',
        types = { 'type_1', 'type_2' },
        cost = {
            inc = 20.0,
            dec = 0.01
        },
    },
]]

return {

    ['ammunation'] = {
        acronym = 'AMU',
        label = 'Ammu-nation',
        types = { 'technology', 'weapons' },
        cost = {
            inc = 20.0,
            dec = 0.01
        }
    },

}