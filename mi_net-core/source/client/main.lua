local ui = false;
RegisterCommand('mi_ui', function()
    ui = not ui
    if ui then
        SendNUIMessage({showUI = true; }) -- Sends a message to the js file. 
    else
        SendNUIMessage({showUI = false; }) -- Sends a message to the js file.
    end
end, false)