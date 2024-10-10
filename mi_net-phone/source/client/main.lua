local ui = false;
RegisterCommand('showui', function()
    ui = not ui
    if ui then
        SendNUIMessage({showUI = true; }) -- Sends a message to the js file. 
    else
        SendNUIMessage({showUI = false; }) -- Sends a message to the js file.
    end
end, false)

RegisterKeyMapping('showuitest', 'Opens the UI', 'keyboard', 'L') -- Keymapping allows players to rebind if they want.