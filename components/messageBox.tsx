import React from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import Markdown from './markdown'

type Props = {
    role: string,
    content: string
}

const MessageBox = ({role, content}: Props) => {
  return (
        <Card>
            <CardContent>
                <Markdown content={content} />
            </CardContent>
            {role !== 'user' && <CardFooter className="border-t bg-muted/50 px-6 py-3 text-xs text-muted-foreground">
                Disclaimer: The medical advice and recommendations provided by this
                application are for informational purposes only and should not
                replace professional medical diagnosis, treatment, or advice.
            </CardFooter>}
        </Card>
    )
}

export default MessageBox