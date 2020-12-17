export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["tablepsa.png",new URL("./files/4cc8afa705205dd77ee96fb28622025faa5db292d0c2b7e656d98c2ab56a8dec15f2ab08eea93f688eb014bc50a63f2897d9e4550bc618decb9c86a9a93c0c38",import.meta.url)],["risk.png",new URL("./files/081a1397f210c9a4b209da1290f8e62f5abc7a65d868195b7ee4df8b466e150b0178a82e254187f2de4710a2cbc771e1f9807f8abb05f7cc5f7705ad4b7d0dae",import.meta.url)],["emojiscale@2.png",new URL("./files/5b5267c24945b55e220c1490e697cf7410b4a9637bec27ed3d18b18edd66612b598139b62efa72d244c44a52d7d53585f6a1ddf6815839921aea3a4edc02e120",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md `# Part 1`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  main.variable(observer()).define(["html","FileAttachment"], async function*(html,FileAttachment)
{
  
  yield html`<div id="container">
  <h1 class="title">
    Risk Assessment: Reforming Bail won't Reform Racism
  </h1>
  <p>
      <br>
      This is the story of Cook County's process of bail reform and its impacts on the people who live there. 

  </p>
  <h3>
    Bail hearings
  </h3>
  <p>
    After an individual is arrested for a felony, they have a bail hearing. The purpose of the hearing is to        set the defendants conditions of bail and set the date of their next court appearance. 
  </p>
  <h3>
    Types of bonds
  </h3>
  <p>
    A judge chooses from 4 types of bond decisions: A judge chooses from 4 types of bond decisions: A judge chooses from 4 types of bond decisions: A judge chooses from 4 types of bond decisions:
  </p>
  
    <ul>
      <li><b>Individual Recognizance (I-Bond)</b>: The defendant is released without paying monetary bail. The individual must promise to return to court for their next appearance and comply with any non-monetary conditions of bail that the judge sets </li>
      <li><b>Deposit (D-Bond)</b>: Release if the defendant pays 10% of the bail amount set by the judge </li>
      <li> <b>Cash (C-Bond)</b>: Release if the defendant pays 100% of the bail amount set by the judge </li>
      <li> <b>No Bail</b>: The defendant is not granted bail and must stay in jail until their next court appearance       </ul>
  
  <figure alt="Figure showing bond options in increasing order of severity: I-Bond, D-Bond, COEM, C-Bond, and No Bail">
  ${await FileAttachment("emojiscale@2.png").image()}
  </figure>
  <p>
      Buuuut, there are also <b>Conditions of Bail</b> so there is technically a 5th option...<br><br> 
A judge is also able to set additional non-monetary conditions to bail. These conditions include daily, weekly, or monthly check-ins with an officer, home confinement, and <b>Court Ordered Electronic Monitoring (COEM)</b> where an individual needs to wear a GPS ankle bracelet which the sheriff monitors. This prevents people from violating home confinement orders, or from skipping town and missing their trial. <br><br> So, a judges decision ultimately comes down to deciding between releasing the person without monetary bail or electronic monitoring (I-Bond), releasing the person paying 10% of the bail amount (D-Bond), giving them an electronic monitoring ankle bracelet (COEM), having them pay the full cash bail amount (C-Bond), or denying them bail (No Bail).
  </p>
  <h3>
    Why are there different types of bonds? 
  </h3>
  <p>
     There are different types of bonds to keep the community safe. Judges evaluate whether someone could:
  </p>
  <figure alt="Commit another crime before they next appear in court,Commit a violent crime if released, or Not arrive at their next court appearance 
">
  ${await FileAttachment("risk.png").image()}
  </figure>

   <h2>
    So what’s the problem?
   </h2>
   <p>
      There are a couple...
      <br>
      <br>
      <b>Problem #1</b> is that it’s pretty hard to guess how risky someone is to the community, so rather be safe         than sorry, right? Well, that’s mostly what happened in Cook County, and their jails were             overflowing with people...
      <br>
      <br>
       Enter, the <b>Public Safety Assessment</b>
      <br>
   </p>

  <h3>
    Solution attempt #1: PSA
  </h3>
  <p>
    The Public Safety Assessment (PSA) is a risk assessment tool. It predicts 3 scores for each person:
  </p>
    <ul>
      <li>Failure to appear (FTA): What is the probability that the person will miss their next court appearance?</li>
      <li>New Criminal Activity (NCA): How likely is the person to engage in a new crime if released?</li>
      <li>New Violent Criminal Activity (NVCA): What are the chances they will commit a violent crime if             released?</li>
    </ul><br>
  <p>
    The score is calculated using 9 factors such as criminal history, age, and any prior failures to appear     in court. The score does not use race or gender as variables.<br><br>

    Once the 3 risk scores have been generated, they are combined to deliver a recommendation for the level     of supervision an individual should receive if they are released.

  </p>
  <figure alt="Figure showing recommendations for release by PSA">
  ${await FileAttachment("tablepsa.png").image()}
  </figure>
  
  
  <p>
    The rationale behind the PSA is that it will be able to accurately predict someone's risk, so judge's don't need to do any guess-work and the community can stay safe. Cook County began using the PSA in 2015 in an effort to effectively assess an individual’s risk and safely reduce the pre-trial detention population. 

This all sounds great. But remember when I said there were several problems?
<br><br>
  Well, <b>Problem #2</b> is that judges don’t always listen to the PSA score. 
  Take a look here: 
  </p>
</div>`;
  
  
}
);
  main.variable(observer()).define(["html","d3","drawChart2"], async function*(html,d3,drawChart2)
{
  yield html`<div id="container">
<h3  class="title">
    Run this cell to start the animation!
  </h3>
<h3 class="title">
    What happens when you give a judge a risk score?
  </h2>
    <p class="description">Simulated data based on PSA data from Cook County
    </p>
<div id="wrapper2" class="wrapper">
    <div class="source">Data from <a href="http://www.cookcountycourt.org/HOME/Bail-Reform">the Circuit Court of Cook County</a></div></div>



<p>
      
     There’s a lot of mixing around. The PSA recommending "release with no conditions" doesn’t mean that they         will be released on an "I-Bond." And this isn’t necessarily bad in itself. Judges are not required to follow      the recommended guidelines outlined by the PSA and take into account factors such as the details of the       case and comments from the defendant and the prosecutor. When it becomes a problem, is when the judge           decides on bail conditions (that do not align with the PSA recommendation) that prevent someone from          leaving jail.</p>
<h3  class="title">
    <a href="https://observablehq.com/d/aca350b088f45700"> **Proceed to part 2 here!**</a>
  </h3>
</div>`;
  const dataset2 = await d3.json("https://raw.githubusercontent.com/bellabuchanan/Digital-Humanities/main/bella.json")
  const goes = ["white","poc"]
  const recNames = ["RNC", "If Rel, PTS 1-3",  "If Rel, PTS HC", "If Rel, MC", "If Rel, COEM","If Rel, PTM"]
  drawChart2(dataset2,goes,recNames);
  
}
);
  main.variable(observer("drawChart2")).define("drawChart2", ["d3","getStatusKey","getRandomValue","getRandomNumberInRange","width","sentenceCase"], function(d3,getStatusKey,getRandomValue,getRandomNumberInRange,width,sentenceCase){return(
async function drawChart2(dataset, goes,recNames) {
  // Data
  
  // Accessors
  const goAccessor = d => d.go
  
  const goIds = d3.range(goes.length)
  
  const educationAccessor = d => d.education
  const educationNames = [
    "I-Bond",
    "D-Bond",
    "C-Bond",
    "COEM",
    "No bail"
  ]
  const educationIds = d3.range(educationNames.length)
  
  const recAccessor = d => d.rec
  
  const recIds = d3.range(recNames.length)
  
  // probabilities
  const stackedProbabilities = {}
  dataset.forEach(startingPoint => {
    const key = getStatusKey(startingPoint)
    let stackedProbability = 0
    stackedProbabilities[key] = educationNames.map((education, i) => {
      stackedProbability += (startingPoint[education] / 100)
      if (i == educationNames.length - 1) {
        // account for rounding
        return 1
      } else {
        return stackedProbability
      }
    })
  })
  
  // persons
  let currentPersonId = 0
  function generatePerson(elapsed) {
    currentPersonId++
    const go = getRandomValue(goIds)
    const rec = getRandomValue(recIds)
    const statusKey = getStatusKey({
      go: goes[go],
      rec: recNames[rec],
    })
    const probabilities = stackedProbabilities[statusKey]
    const education = d3.bisect(probabilities, Math.random())
    
    return {
      id: currentPersonId,
      go,
      rec,
      education,
      startTime: elapsed + getRandomNumberInRange(-0.1, 0.1),
      yJitter: getRandomNumberInRange(-15, 15)
      
    }
  }
  
  // dimensions
  let dimensions = {
    width: d3.min([width, 1200]),
    height: 500,
    margin: {
      top: 10,
      right: 200,
      bottom: 10,
      left: 120,
    },
    pathHeight: 50,
    endsBarsWidth: 15,
    endingBarPadding: 3,
  }
  dimensions.boundedWidth = dimensions.width - dimensions.margin.left - dimensions.margin.right
  dimensions.boundedHeight = dimensions.height - dimensions.margin.top - dimensions.margin.bottom
  
  // canvas
  const wrapper = d3.select("#wrapper2")
    .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
  
  const bounds = wrapper.append("g")
    .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`)
  
  // scales
  const xScale = d3.scaleLinear()
    .domain([0, 1])
    .range([0, dimensions.boundedWidth])
    .clamp(true)
  
  const startYScale = d3.scaleLinear()
    .domain([recIds.length, -1])
    .range([0, dimensions.boundedHeight])
  const endYScale = d3.scaleLinear()
    .domain([educationIds.length, -1])
    .range([0, dimensions.boundedHeight])
  
  const linkLineGenerator = d3.line()
    .x((d, i) => i * (dimensions.boundedWidth / 5))
    .y((d, i) => i <= 2
      ? startYScale(d[0])
      : endYScale(d[1])
    )
    .curve(d3.curveMonotoneX)
  
  const yTransitionProgressScale = d3.scaleLinear()
    .domain([0.45, 0.55])
    .range([0, 1])
    .clamp(true)
  
  const colorScale = d3.scaleLinear()
    .domain(d3.extent(recIds))
    .range(["#12CBC4", "#B53471"])
    .interpolate(d3.interpolateHcl)
  
  // draw data
  const linkOptions = d3.merge(
    recIds.map(startId => (
      educationIds.map(endId => (
        new Array(6).fill([startId, endId])
      ))
    ))
  )
  const linksGroup = bounds.append("g")
  const links = linksGroup.selectAll(".category-path")
    .data(linkOptions)
    .enter().append("path")
      .attr("class", "category-path")
      .attr("d", linkLineGenerator)
      .attr("stroke-width", dimensions.pathHeight)  
  
  // draw peripherals
  const trianglePoints = [
    "-7,  6",
    " 0, -6",
    " 7,  6",
  ].join(" ")
  
  
  const startingLabelsGroup = bounds.append("g")
    .style("transform", "translateX(-20px)")
  const startingLabels = startingLabelsGroup.selectAll(".start-label")
    .data(recIds)
    .enter().append("text")
      .attr("class", "label start-label")
      .attr("y", (d, i) => startYScale(i))
      .text((d, i) => sentenceCase(recNames[i]))
  const startLabel = startingLabelsGroup.append("text")
    .attr("class", "start-title")
    .attr("y", startYScale(recIds[recIds.length - 1]) - 65)
    .text("PSA")
  const startLabelLineTwo = startingLabelsGroup.append("text")
    .attr("class", "start-title")
    .attr("y", startYScale(recIds[recIds.length - 1]) - 50)
    .text("Recommendation")
  const startingBars = startingLabelsGroup.selectAll(".start-bar")
    .data(recIds)
    .enter().append("rect")
      .attr("x", 20)
      .attr("y", d => startYScale(d) - (dimensions.pathHeight / 2))
      .attr("width", dimensions.endsBarsWidth)
      .attr("height", dimensions.pathHeight)
      .attr("fill", colorScale)
   
  const endingLabelsGroup = bounds.append("g")
    .style("transform", `translateX(${dimensions.boundedWidth + 20}px)`)
  
  const endingLabels = endingLabelsGroup.selectAll(".end-label")
    .data(educationNames)
    .enter().append("text")
      .attr("class", "label end-label")
      .attr("y", (d, i) => endYScale(i) - 15)
      .text(d => d)
  
  const legendGroup = bounds.append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${dimensions.boundedWidth}, 5)`)
  const femaleLegend = legendGroup.append("g")
    .attr("transform", `translate(${-dimensions.endsBarsWidth * 1.5 + dimensions.endingBarPadding + 1}, 0)`)
  femaleLegend.append("polygon")
    .attr("points", trianglePoints)
    .attr("transform", "translate(-7, 0)")
  femaleLegend.append("text")
    .attr("class", "legend-text-left")
    .text("BIPOC")
    .attr("x", -20)
    .attr("y", 4)
  femaleLegend.append("line")
    .attr("class", "legend-line")
    .attr("x1", -dimensions.endsBarsWidth / 2 + 19)
    .attr("x2", -dimensions.endsBarsWidth / 2 + 19)
    .attr("y1", 12)
    .attr("y2", 37)
  const maleLegend = legendGroup.append("g")
    .attr("transform", `translate(${-dimensions.endsBarsWidth / 2 - 4}, 0)`)
  maleLegend.append("circle")
    .attr("r", 5.5)
    .attr("transform", "translate(5, 0)")
  maleLegend.append("text")
    .attr("class", "legend-text-right")
    .text("White")
    .attr("x", 15)
    .attr("y", 4)
  maleLegend.append("line")
    .attr("class", "legend-line")
    .attr("x1", -dimensions.endsBarsWidth / 2 - 6)
    .attr("x2", -dimensions.endsBarsWidth / 2 - 6)
    .attr("y1", 12)
    .attr("y2", 37)
  
  // draw data
  const maleMarkers = endingLabelsGroup.selectAll(".male-marker")
    .data(educationIds)
    .enter().append("circle")
      .attr("class", "ending-marker male-marker")
      .attr("r", 5.5)
      .attr("cx", 5)
      .attr("cy", d => endYScale(d) + 5)
  
  
  const femaleMarkers = endingLabelsGroup.selectAll(".female-marker")
    .data(educationIds)
    .enter().append("polygon")
      .attr("class", "ending-marker female-marker")
      .attr("points", trianglePoints)
      .attr("transform", d => `translate(5, ${endYScale(d) + 20})`)
  
  const maxPeople = 10000
  let people = []
  const markersGroup = bounds.append("g")
    .attr("class", "markers-group")
  
  
  const endingBarGroup = bounds.append("g")
    .attr("transform", `translate(${dimensions.boundedWidth}, 0)`)
  
  function updateMarkers(elapsed) {
    const xProgressAccessor = d => (elapsed - d.startTime) / 5000
    if (people.length < maxPeople) {
      people = [
        ...people,
        ...d3.range(2).map(() => generatePerson(elapsed)),
      ]
    }
    
    const females = markersGroup.selectAll(".marker-circle")
      .data(people.filter(d => (
        xProgressAccessor(d) < 1
        && goAccessor(d) == 0
      )), d => d.id)
    females.enter().append("circle")
      .attr("class", "marker marker-circle")
      .attr("r", 5.5)
      .style("opacity", 0)
    females.exit().remove()
    
    const males = markersGroup.selectAll(".marker-triangle")
      .data(people.filter(d => (
        xProgressAccessor(d) < 1
        && goAccessor(d) == 1
      )), d => d.id)
    males.enter().append("polygon")
      .attr("class", "marker marker-triangle")
      .attr("points", trianglePoints)
      .style("opacity", 0)
    males.exit().remove()
    
    const markers = d3.selectAll(".marker")
    markers.style("transform", d => {
      const x = xScale(xProgressAccessor(d))
      const yStart = startYScale(recAccessor(d))
      const yEnd = endYScale(educationAccessor(d))
      const yChange = yEnd - yStart
      const yProgress = yTransitionProgressScale(xProgressAccessor(d))
      const y = yStart + (yChange * yProgress) + d.yJitter
      return `translate(${x}px, ${y}px)`
    })
      .attr("fill", d => colorScale(recAccessor(d)))
      .transition().duration(100)
        .style("opacity", d => xScale(xProgressAccessor(d)) < 10 ? 0 : 1)
    
    const endingGroups = educationIds.map((endId, i) => (
      people.filter(d => (
        xProgressAccessor(d) >= 1
        && educationAccessor(d) == endId
      ))
    ))
    
    const endingPercentages = d3.merge(
      endingGroups.map((peopleWithSameEnding, endingId) => (
        d3.merge(
          goIds.map(goId => (
            recIds.map(recId =>  {
              const peopleInBar = peopleWithSameEnding.filter(d => (
                goAccessor(d) == goId
              ))
              const countInBar = peopleInBar.length
              const peopleInBarWithSameStart = peopleInBar.filter(d => (
                recAccessor(d) == recId
              ))
              const count = peopleInBarWithSameStart.length
              const numberOfPeopleAbove = peopleInBar.filter(d => (
                recAccessor(d) > recId
              )).length
              return {
                endingId,
                recId,
                goId,
                count,
                countInBar,
                percentAbove: numberOfPeopleAbove / (peopleInBar.length || 1),
                percent: count / (countInBar || 1),
              }
            })
          ))
        )
      ))
    )
    
    endingBarGroup.selectAll(".ending-bar")
      .data(endingPercentages)
      .join("rect")
        .attr("class", "ending-bar")
        .attr("x", d => -dimensions.endsBarsWidth * (d.goId + 1) - (d.goId * dimensions.endingBarPadding))
        .attr("width", dimensions.endsBarsWidth)
        .attr("y", d => endYScale(d.endingId) - dimensions.pathHeight / 2 + dimensions.pathHeight * d.percentAbove)
        .attr("height", d => d.countInBar ? dimensions.pathHeight * d.percent : dimensions.pathHeight)
        .attr("fill", d => d.countInBar ? colorScale(d.recId) : "#DADADD")
    
    endingLabelsGroup.selectAll(".ending-value")
      .data(endingPercentages)
      .join("text")
        .attr("class", "ending-value")
        .attr("x", d => (d.recId) * 33 + 47)
        .attr("y", d => endYScale(d.endingId) - dimensions.pathHeight / 2 + 14 * d.goId + 35)
        .attr("fill", d => d.countInBar ? colorScale(d.recId) : "#DADADD")
        .text(d => d.count)
    
  }
  
  d3.timer(updateMarkers)
  
}
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style>
#container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em 2em;
    font-family: sans-serif;
    font-size: 16px;
    color: #34495e;
    background: white;
}

.wrapper {
    padding-bottom: 5em;
}

svg {
    overflow: visible;
    fill: #34495e;
}

svg text {
    user-select: none;
}

.title {
    position: relative;
    margin-top: 1.3em;
    margin-bottom: 0;
    line-height: 1.2em;
    display: flex;
    justify-content: center;
    text-align: center;
    display: flex;
    letter-spacing: -0.011em;
    align-items: center;
}

.description {
    max-width: 40em;
    margin-bottom: 2.9em;
    font-size: 0.9em;
    text-align: center;
    line-height: 1.4em;
    opacity: 0.5;
}

.source {
    position: absolute;
    bottom: 1em;
    left: 2em;
    opacity: 0.5;
    font-size: 0.8em;
    font-style: italic;
}

.source a {
    color: inherit;
}

.category-path {
  fill: none;
  stroke: #ebecee;
}

.start-label {
  text-anchor: end;
  dominant-baseline: middle;
}

.start-title {
  text-anchor: end;
  font-size: 0.8em;
  opacity: 0.6;
}

.label {
  font-weight: 600;
  dominant-baseline: middle;
}

.ending-marker {
  opacity: 0.6;
}

.marker {
  mix-blend-mode: multiply;
}

.ending-bar {
  transition: all 0.3s ease-out;
}

.ending-value {
  font-size: 0.7em;
  text-anchor: end;
  font-weight: 600;
  font-feature-settings: 'tnum' 1;
}

.legend {
  font-size: 0.8em;
  opacity: 0.6;
  dominant-baseline: middle:
}

.legend-text-left {
  text-anchor: end;
}

.legend-line {
  stroke: gray;
  stroke-width: 1px;
}

</style>
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Helper functions`
)});
  main.variable(observer("getRandomNumberInRange")).define("getRandomNumberInRange", function(){return(
(min, max) => Math.random() * (max - min) + min
)});
  main.variable(observer("getRandomValue")).define("getRandomValue", ["getRandomNumberInRange"], function(getRandomNumberInRange){return(
arr => arr[Math.floor(getRandomNumberInRange(0, arr.length))]
)});
  main.variable(observer("sentenceCase")).define("sentenceCase", function(){return(
str => [
  str.slice(0, 1).toUpperCase(),
  str.slice(1),
].join("")
)});
  main.variable(observer("getStatusKey")).define("getStatusKey", function(){return(
({go, rec}) => [go, rec].join("--")
)});
  main.variable(observer("getProb")).define("getProb", ["getRandomNumberInRange"], function(getRandomNumberInRange){return(
function getProb() {
  let result;
  const a = getRandomNumberInRange(0,100)
  if (a < 16) {
    result = 0;
  } else {
    result = 1;
  }
  return result;
}
)});
  return main;
}
