import React, { useEffect, useState } from "react";
import { myQuery } from "@/queries";






const ImageViewer = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)


    const loadUploadedData = async () => {
        setLoading(true)
        const query = myQuery();
        const results = await query.search("irys:transactions").tags([{ name: "user-ID", values: ["3"] }]).sort("ASC");
        console.log("the result of the transactions: ", results)
        setData(results);
        setLoading(false);
    }


    useEffect(() => {
        loadUploadedData()
    }, [])






    if (loading) {
        return <div>Loading...........</div>
    }


    return <div className="flex flex-wrap">
        {data &&
            data.map(({ tags, id, }) => (
                <div className="w-1/5 p-4" key={id}>
                    <object data={`https://arweave.net/${id}`} className="w-full h-auto rounded"
                        width={100}
                       height={100}
                        alt=""
                    />
                      <a>URL:  {`https://arweave.net/${id}`}</a>

                    {tags.map(({ name, value }) => {
                        if (name == "caption") {
                            return <h3 className="mt-2 text-lg font-semibold" key={value}>{value}</h3>
                        } else if (name == "description") {
                            return <p className="text-gray-500" key={value}>{value}</p>
                        }
                    })}
                </div>
            ))}
    </div>
}






export default ImageViewer
