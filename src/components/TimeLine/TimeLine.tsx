import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'


export default function TimeLine() {
  return (
    <div>
        <h3 className='timeline-headline'>
            My studies timeline
        </h3>
        <VerticalTimeline>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2022"
            iconStyle={{ background: 'lightgreen', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">FI MUNI</h3>
            <h4 className="vertical-timeline-element-subtitle">1st semester</h4>
            <li className='indented'>Database design course</li>
            <li className='indented'>Programming in python</li>
            <li className='indented'>Functional programming</li>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="February 2023"
            iconStyle={{ background: 'lightgreen', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">FI MUNI</h3>
            <h4 className="vertical-timeline-element-subtitle">2nd semester</h4>
            <li className='indented'>Algorythms and data structures</li>
            <li className='indented'>The C language</li>
            <li className='indented'>Computer networks</li>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2023"
            iconStyle={{ background: 'lightgreen', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">FI MUNI</h3>
            <h4 className="vertical-timeline-element-subtitle">3rd semester</h4>
            <li className='indented'>Operating systems (in C)</li>
            <li className='indented'>C# and OOP</li>
            </VerticalTimelineElement>
            <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="February 2024 until NOW"
            iconStyle={{ background: 'lightgreen', color: '#fff' }}
            >
            <h3 className="vertical-timeline-element-title">FI MUNI</h3>
            <h4 className="vertical-timeline-element-subtitle">4th semester</h4>
            <li className='indented'>Web development</li>
            <li className='indented'>Java</li>
            <li className='indented'>Cryptography</li>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}
