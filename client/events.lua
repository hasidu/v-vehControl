RegisterNetEvent("VehControl:UIMessage", function(action, data)
    UIMessage(action, data)

    Debug("(netEvent) [VehControl:UIMessage] \n (param) action: ", json.encode(action), "\n (param) data: ",
        json.encode(data),
        "\n Invoking Resource: ",
        GetInvokingResource())
end)

RegisterNetEvent("vehmenu:toggle", SendCurrentVehicleDataToNui)
