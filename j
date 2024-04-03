

const uploadMetaDataToArweave = async (event) => {
  event.preventDefault();
  try {
    if (userwallet && mintingwallet) {
      setLoading(true);
      const metaFormData = new FormData();
      const userid = {
        name: "user-id",
        value: "1",
      };
      const Applicationtype = { name: "Content-Type", value: "application/json" }
      const userWallet = { name: "userwallet", value: userwallet };
      const mintingWallet = { name: "mintingwallet", value: mintingwallet }

      const fileMetaData = [
            userid,
            userWallet,
            mintingWallet ,
            Applicationtype
                           ]
      formMetaData.append("metadata", JSON.stringify(fileMetaData));
      const response = await fetch("/api/metadataupload", {
        method: "POST",
        body: metaFormData,
      });
     console.log ("respone from the method: ",response.data)
    }
  } catch (error) {
    setError(error.message);
    console.log("error ", error);
  } finally {
    setLoading(false);
    setUserWallet("");
    setMintingWallet("")
    fileInputRefMeta.current.value = null;


    }

  };
  return (
    <React.Fragment>
    <div className="flex justify-center items-center">
      {error && <p>There was an error: {error}</p>}
      <div className="bg-white m-2 p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl mb-4">meta</h2>
        <div className='flex-col'>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload meta</label>
            <input
              type="file"
              className="hidden"
              id="imageInput"
              onChange={handleImageUpload}
              ref={fileInputRef}
              accept=".pdf"
            />
          </div>

          {/* Div to display selected image */}
          <div className="mt-2">
            {imageSource ? (
              <object class="pdf"
          data={imageSource}
          width="250"
          height="250"
          alt="Selected"
          >
           </object>

            ) : (
              <p className="text-gray-400">No image selected</p>
            )}
          </div>

          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => document.getElementById('imageInput').click()}
          >
            Select PDF
          </button>

        </div>
      </div>

      {selectedFile &&
        <div className='bg-white m-2 p-8 w-2/3'>
            <div className="bg-white p-8 m-4 rounded shadow-md">
              <h2 className="text-2xl mb-4">PDF Details</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">PDF Caption</label>
                <input
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  type="text"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">PDF Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md resize-none focus:ring focus:ring-blue-300"
                  rows="4"
                ></textarea>
              </div>
              <button
                disabled={loading}
                onClick={uploadFileToArweave}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
              >
                Upload PDF
              </button>
            </div>

        </div>
      }

    </div>

    <div>
      <ImageViewer />
    </div>

    </React.Fragment>
  )
  }
