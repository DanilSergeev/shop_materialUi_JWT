import { $host } from "./index"

export const getOneDevice = async (id) => {
    const {data} = await $host.get("api/device/"+id)
    return data
}

export const getAllDevice = async () => {
    const {data} = await $host.get("api/device/")
    return data
}
