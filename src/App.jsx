function HomePage() 
  {return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: 'Brush Script MT', color: 'rebeccapurple', fontSize:'4rem' }}>
        {"KittyCaptain's website"}
      </h1>
      <h2
        style={{
          fontFamily: 'Brush Script MT',
          color: 'darkslateblue',
          marginBottom: '10rem',
          fontSize:'3rem'
        }}
      >
        click the buttons below
      </h2>
      <button
        style={{
          fontFamily: 'Times',
          padding: '1rem',
          fontSize: '2rem',
          background: 'beige',
          color: 'black'
        }}
        onClick={() => alert('Hello, welcome!!!!!')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'Times',
          padding: '1rem',
          fontSize: '2rem',
          background: 'beige',
          color: 'black',
          marginTop: '2rem'
        }}
        onClick={() => {
          const name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you!');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default HomePage;



