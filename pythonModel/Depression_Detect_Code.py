import pickle
import numpy as np

from fastapi import FastAPI, File, UploadFile
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()
# I used cors to allow all origins, as I was testing on localhost
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root_api () :
    print ("Server Reached")
    return ({"message": "Server Reached"})


@app.get("/check-depression")
def checkDepression(a, b, c, d, e, f, g, i):
    print(a,b,c,d,e,f,g,i)
    with open('last_model.pkl', 'rb') as file:
        Pickled_LR_Model = pickle.load(file)

        response_binary=[]

        with open("NLP_Model.pkl", 'rb') as nlpFile:
            NLP_Model = pickle.load(nlpFile)

            for i in [a, b, c, d, e, f, g, i]:
                print("Checking +ve -ve of", i)
                binary_result = NLP_Model.predict(i)[0]['label']
                if (binary_result=='POSITIVE'):
                    response_binary.append(1)
                else :
                    response_binary.append(0)
                print("Sentiment:", binary_result)
            if(response_binary[3]==1):
                response_binary[3]=0
            else:
                response_binary[3]=1
            if(response_binary[6]==1):
                response_binary[6]=0
            else:
                response_binary[6]=1    
            print(response_binary)
        print(response_binary)
        result = np.array(response_binary,ndmin=2)
        print(result)

        resultt=Pickled_LR_Model.predict(result)

        print("Result", resultt)

        if resultt[0]==0:
        # if resultt==['Major Depression']:
            print('Major Depression')
            return ({"result": "The result after analysing all above details is :<b class='text-danger'> Major Depression</b><br>You should consult Doctor"})
        elif resultt[0]==1:
        # elif resultt==['Minor Depression']:
            print('Minor Depression')
            return ({"result": "The result after analysing all above details is : <b class='text-warning'>Minor Depression</b> <br> You can take following treatment: 1.Nutritional Care<br>2.Exercise Daily<br>3.Read books<br>4.Watch Motivational Videos<br>5.Attend live social events"})
        else:
            print('No Depression')
            return ({"result": "The result after analysing all above details is : <b class='text-success'>No Depression</b> <br> You can enjoy your daily activity"})