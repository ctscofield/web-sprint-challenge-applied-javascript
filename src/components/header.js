const Header = (title, date, temp) => {
  const header = document.createElement('div')
  title = document.createElement('h1')
  date = document.createElement('span')
  temp = document.createElement('span')

  header.appendChild(date)
  header.appendChild(title)
  header.appendChild(temp)

  header.classList.add('header')
  date.classList.add('date')
  temp.classList.add('temp')

  date.textContent = date
  temp.textContent = temp

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return header
}

const headerAppender = (selector) => {
  const headEntry = document.querySelector('.header-container')
  headEntry.appendChild(Header(title, date, temp))
  for (i = 0; i < selector.length; i++) {
    headEntry.appendChild(Header(selector[i]));
  }
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  return headEntry
}

export { Header, headerAppender }
