import React from 'react';

// const styles = {
//     position: "absolute",
//     top: "43%",
//     left: "50%"
// }

const Container = function (props) {
    return (
        <div className="container">
            {props.data.formData.length === 0 ? null :
              props.data.formData.map((value,i) => {
                  return (
                      <div key={i}>
                    <p>{value.position}</p>
                    <p>{value.company}</p>
                    <p>{value.startMonth}</p>
                    <p>{value.startYear}</p>
                    <p>{value.location}</p>
                    <p>{value.describe}</p>
                    </div>
                  )
              })
             }

        </div>
    )

}

export default Container;




