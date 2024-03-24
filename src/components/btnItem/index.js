const BtnItem = props => {
  const {item, activeTag, onSelectTag} = props
  const {optionId, displayText} = item
  const tagStyle = optionId === activeTag ? 'selected-tag' : 'tag-btn'
  const selectTag = () => {
    onSelectTag(optionId)
  }
  return (
    <li>
      <button onClick={selectTag} className={tagStyle} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default BtnItem
