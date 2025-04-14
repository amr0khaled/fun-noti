import { useEffect, useState } from "react"
import OneSignal, { IInitObject } from 'react-onesignal'

const config = {
  appId: "742be5b6-8542-4c6c-ac25-e0c249b54935"
}

export const useInitOnesignal = (options: IInitObject) => {
  const [init, setInit] = useState(false)
  useEffect(() => {
    if (!init) {
      if (typeof window !== 'undefined') {
        OneSignal.init({
          safari_web_id: "web.onesignal.auto.31ca14f2-9a64-44ce-b1fb-164017f55430",
          // notifyButton: {
          //   enable: true,
          // },
          allowLocalhostAsSecureOrigin: true,
          ...options,
          appId: config.appId,
        }).then(() => setInit(true))
      }
    }
  }, [init, options])
}
