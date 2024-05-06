import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import Tasks from './components/Tasks'
import {
  MainContainer,
  TaskContainer,
  Heading,
  InputContainer,
  LabelText,
  Input,
  Select,
  AddButton,
  TaskDisplayContainer,
  TagsHeading,
  TagsContainer,
  TaskContainer,
  TagsButton,
  TagsListItem,
  NoTaskText,
} from './style'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code h
class App extends Component {
  state = {
    myTaskList: [],
    inputTask: '',
    selectTag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onClickAddButton = () => {
    const {inputTask, selectTag} = this.state
  }

  render() {
    const {myTaskList, inputTask, selectTag, selectTag} = this.state
    const filterTaskList =
      activeTag === 'INITIAL'
        ? myTaskList
        : myTaskList.filter(each => eachTaskCategory === activeTag)

    return (
      <MainContainer>
        <TaskContainer>
          <Heading>Create a Task</Heading>
          <InputContainer>
            <LabelText for="textInput">Task</LabelText>
            <Input
              id="textInput"
              type="text"
              placeholder="Enter the task here"
              value={inputTask}
              onChange={this.onChangeInputTask}
            />
            <LabelText for="optionInput">Tags</LabelText>
            <Select
              id="optionInput"
              value={selectTag}
              onChange={this.onChangeSelectTag}
            >
              {tagsList.map(eachTag => (
                <option value={eachTag.optionId}>{eachTag.displayText}</option>
              ))}
            </Select>
          </InputContainer>
          <AddButton type="button" onClick={this.onClickAddButton}>
            Add Task
          </AddButton>
        </TaskContainer>
        <TaskDisplayContainer>
          <TaskHeading>Tags</TaskHeading>
          <TagsContainer>
            {tagsList.map(eachTag => {
              const isActive = activeTag == eachTag.optionId
              return (
                <TagListItem key={eachTag.optionId}>
                  <TagsButton
                    type="button"
                    value={eachTag.optionId}
                    onClick={this.onClickTag}
                    isActive={isActive}
                  >
                    {eachTag.displayText}
                  </TagsButton>
                </TagListItem>
              )
            })}
          </TagsContainer>
          <TaskHeading>Tasks</TaskHeading>
          <TaskContainer>
            {filterTaskList.length == 0 ? (
              <NoTaskText>No Tasks AddedYet</NoTaskText>
            ) : (
              filterTaskList.map(eachTask => (
                <Tasks
                  key={eachTask.id}
                  taskDetails={eachTask.id}
                  taskDetails={eachTask}
                />
              ))
            )}
          </TaskContainer>
        </TaskDisplayContainer>
      </MainContainer>
    )
  }
}

export default App
