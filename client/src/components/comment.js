import React from "react"
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
class Comment extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { issue, title } = this.props;
    const gitalk = new Gitalk({
      clientID: '5d584e1b0f66442d84a0',
      clientSecret: '0db8efee16b70069c9b68e6033b620ae6e28a207',
      repo: 'guitar-hub',
      owner: 'guitar-hub',
      admin: ['Turkyden'],
      id: window.location.pathname,
      title: title,
      number: issue,
      distractionFreeMode: true
    })
    gitalk.render('gitalk-container')
  }

  render() {
    return (
      <div id="gitalk-container"></div>
    )
  }
}

export default Comment