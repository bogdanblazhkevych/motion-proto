'use client'
import { MouseEventHandler, useRef, useState } from 'react'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import styles from './styles.module.css'

export default function Messages() {
    const [currentContact, setCurrentContact] = useState<number>(0)
    function handleClick (index: number) {
        setCurrentContact(index)
    }
     return(
        <div className={styles.messageswrapper}>
            <div className={styles.messageinboxwrapper}>
                {messages.map((contact, index) => {
                    return(                    
                        <InboxNode
                            onClick={() => handleClick(index)}
                            icon={contact.icon}
                            name={contact.name}
                            message={contact.messageHistory[contact.messageHistory.length - 1].message} 
                            activeStyle={currentContact === index ? styles.inboxnodeactive : null}/>
                    )
                })}
            </div>

            <div className={styles.messagewindow}>
                <div className={styles.messagedisplay}>
                    {messages[currentContact].messageHistory.map((messagenode, index) => {
                        return(
                            <div className={`${styles.message} ${messagenode.type === 'incoming' ? styles.incomming : styles.outgoing}`}>
                                {messagenode.message}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.textinputcontainer}>
                    yoyo
                    <TextInput />
                </div>
            </div>

        </div>
    )
}

interface MessagesNode {
    name: string,
    icon: string,
    messageHistory: MessageHistoryNode[]
}

interface MessageHistoryNode {
    type: "incoming" | "outgoing",
    message: string
}
interface InboxNodeInterface {
    onClick: MouseEventHandler<HTMLDivElement> ,
    name: string,
    icon: string,
    message: string,
    activeStyle: string | null
}

function InboxNode(props: InboxNodeInterface) {
    const {name, icon, message, onClick, activeStyle} = props
    return(
        <div className={`${styles.inboxwrapper} ${activeStyle}`} onClick={onClick}>
            <div className={styles.inboxiconwrapper}>
                <img src={icon}></img>
            </div>

            <div className={styles.inboxtextwrapper}>
                <div className={styles.inboxname}>
                    {name}
                </div>
                <div className={styles.inboxmessage}>
                    {message}
                </div>
            </div>
        </div>
    )
}

interface TextInputPropsInterface {
    sendMessage: (message: string) => void;
    didUserSendLastMessage: () => boolean;
}

function TextInput(){
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [message, setMessage] = useState('')

    function setDynamicInputHeight(){
        const textArea = textAreaRef.current;

        if (textArea) {
            textArea.rows = 1;
            
            const { paddingTop, paddingBottom } = getComputedStyle(textArea);
            const textAreaPadding = parseInt(paddingTop) + parseInt(paddingBottom);

            const singleRowHeight = textArea.clientHeight - textAreaPadding - 1;
            const currentRowHeight = textArea.scrollHeight - textAreaPadding;
            
            const rowCount = Math.round(currentRowHeight / singleRowHeight);

            textArea.rows = rowCount;
        }
    }

    function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>):void {
        setDynamicInputHeight()
        setMessage(e.target.value)
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>):void {
        if (e.key === 'Enter') {
            e.preventDefault()
            sendMessageWrapper()
        }
    }

    function handleClick() {
        sendMessageWrapper()
    }

    function sendMessageWrapper(){
        const textArea = textAreaRef.current;

        if (textArea && message.length > 0) {
            textArea.rows = 1;
            setMessage('')
        }
    }

    return(
        <div className={styles.textinputwrapper}>

            <div className={styles.typefield}>

                <textarea rows={1} ref={textAreaRef} data-expandable className={styles.inputelement} value={message} onChange={handleInputChange} onKeyDown={handleKeyDown}></textarea>
                
                <div className={styles.sendbutton}>
                    <div className={styles.arrowicon} onClick={handleClick}>
                        <BsFillArrowUpRightCircleFill />
                    </div>
                </div>

            </div>

        </div>
    )
}


const messages: MessagesNode[] = [
    {
      name: 'Roy',
      icon: 'https://randomuser.me/api/portraits/men/43.jpg',
      messageHistory: [
        {
          type: 'incoming',
          message: 'Q1 reports look great! We should still consider possible downsizing'
        },
        {
          type: 'incoming', 
          message: 'We are doing great but we can still be doing better'
        },
        {
          type: 'outgoing',
          message: "I have spoken to some of the managers and they disagree"
        },
        {
          type: 'incoming',
          message: 'Even if managers disagree, we need to keep shareholder interests in mind'  
        },
        {
          type: 'outgoing',
          message: 'Shareholders seem happy with our current direction and growth'
        },
        {
          type: 'incoming',
          message: 'Growth is good but we can always optimize our operations'
        },
        {
          type: 'outgoing',
          message: 'What areas do you think could use optimization?'
        },
        {
          type: 'incoming',
          message: 'Our supply chain management could be more efficient to increase margins'
        },
        {
          type: 'outgoing',
          message: 'I can put together an analysis of our supply chain for the next quarterly meeting'
        },
        {
          type: 'incoming',
          message: 'That would be great, thanks!'
        },
        {
          type: 'incoming',
          message: 'Any other thoughts before the meeting?'
        }
      ]
    },
    {
      name: 'Sarah', 
      icon: 'https://randomuser.me/api/portraits/women/24.jpg',
      messageHistory: [
        {
          type: 'incoming',
          message: 'When can I expect the sales projections for Q2?'
        },
        {
          type: 'outgoing',
          message: 'I should have those ready by end of day tomorrow'  
        },
        {
          type: 'incoming', 
          message: 'No problem, just let me know if you need any help'
        },
        {
          type: 'outgoing',
          message: 'Actually could you send over the regional sales data from last quarter?'
        },
        {
          type: 'incoming',
          message: 'Sure, attached is all the Q1 regional sales data'
        },
        {
          type: 'outgoing', 
          message: 'Thanks! This will really help in putting together the projections'
        },
        {
          type: 'incoming',
          message: 'Happy I could help! Let me know if you need anything else'
        },
        {
          type: 'outgoing',
          message: 'Will do!'
        },
        {
          type: 'incoming',
          message: 'Hey just checking in, how are those sales projections coming along?'
        },  
        {
          type: 'outgoing',
          message: 'Making good progress! Hoping to have a draft for you to review tomorrow morning' 
        },
        {
          type: 'incoming',
          message: 'Awesome, can\'t wait to see them!'
        }
      ]
    },
    {
      name: 'David',
      icon: 'https://randomuser.me/api/portraits/men/42.jpg',
      messageHistory: [
        {
          type: 'incoming',
          message: 'I really enjoyed meeting you last week at the conference'  
        },
        {
          type: 'outgoing',
          message: 'It was great meeting you too! We should stay in touch'
        },
        {
          type: 'incoming',
          message: 'Absolutely, perhaps we could meet up sometime to brainstorm potential collaborations between our companies'
        },
        {
          type: 'outgoing',  
          message: 'I\'d be very interested in exploring collaboration opportunities, maybe sometime next month?' 
        },
        {
          type: 'incoming',
          message: 'Works for me! Feel free to shoot me some potential dates'
        },
        {
          type: 'outgoing',
          message: 'How about Thurs May 3 or Fri May 10?'
        },
        {  
          type: 'incoming',
          message: 'May 10 works perfectly!'  
        },
        {
          type: 'outgoing', 
          message: 'Great! Lets plan to meet up for lunch on the 10th'
        },
        {
          type: 'incoming',
          message: 'Sounds good, I\'m looking forward to it!'
        },
        {
          type: 'incoming', 
          message: 'I may also bring along another colleague from our innovation team'
        },
        {
          type: 'outgoing',  
          message: 'The more the merrier! This could be the start of a very promising partnership'
        }
      ]
    },
    {
      name: 'Amanda',
      icon: 'https://randomuser.me/api/portraits/women/68.jpg',
      messageHistory: [
        {
          type: 'incoming',
          message: 'I wanted to quickly touch base regarding inventory levels'  
        },
        {
          type: 'outgoing',
          message: 'Sure thing, what did you want to discuss?'
        },  
        {
          type: 'incoming', 
          message: 'It looks like some of our faster selling products have been out of stock recently'
        },
        {
          type: 'outgoing',
          message: 'You\'re absolutely right, demand has exceeded our forecasts for those items'
        },
        {
          type: 'incoming',  
          message: 'Do we need to adjust inventory orders for the next quarter to account for this?'
        },
        {
          type: 'outgoing', 
          message: 'Increasing inventory levels makes sense here to avoid running out of our hot sellers'
        },
        {
          type: 'incoming',
          message: 'Okay great, I\'ll ask our purchasing manager to place larger orders for those products'
        },
        {
          type: 'outgoing',
          message: 'Thanks for catching this Amanda! Please let me know if any other inventory concerns come up'
        },
        {
          type: 'incoming',
          message: 'Will do! I\'ll also have an updated sales forecast for you by end of week'
        },
        { 
          type: 'outgoing',
          message: 'Much appreciated, that will help immensely with planning inventory levels'  
        }
      ]
    }
  ];
