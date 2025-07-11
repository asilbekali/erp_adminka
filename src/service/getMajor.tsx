import { useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { Context } from "../context/Context"
import { MoreOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { formatTime } from "../hooks/formatTime"
import type { MajorType } from "../types/MajorType"
import { instance } from "../hooks/inctanse"

export const getMajor = (url: string, search: string, setLoading: Dispatch<SetStateAction<boolean>>) => {
    const [data, setData] = useState<any>([])
    const navigate = useNavigate()
    const { token } = useContext(Context)

    useEffect(() => {
        instance(url, {
            params: { name: search },
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => {
            res.data.data.sort((a: MajorType, b: MajorType) => a.id - b.id)
            res.data.data.map((item: any) => {
                item.createdAt = formatTime(item.createdAt)
                item.key = item.id
                item.action = <Button onClick={() => navigate(`${item.id}`)} className="w-[25px] h-[25px]" size="small"> <MoreOutlined /> </Button>
                return item
            })
            setData(res.data)
            setLoading(false)
        })
    }, [search])

    return data
}
