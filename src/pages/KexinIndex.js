import { useEffect, useState, useRef } from 'react'
import * as d3 from 'd3'
import NavbarIndex from '../layouts/NavbarIndex'
import IndexStyles from '../styles/kexinIndex.module.css'

function KexinIndex() {
  // useEffect();

  // map basic setting
  const WIDTH = window.innerWidth
  const HEIGHT = window.innerHeight
  const ZOOM_THRESHOLD = [1, 5]
  const OVERLAY_MULTIPLIER = 10
  const OVERLAY_OFFSET = OVERLAY_MULTIPLIER / 2 - 0.5
  const ZOOM_DURATION = 500
  const ZOOM_IN_STEP = 2
  const ZOOM_OUT_STEP = 1 / ZOOM_IN_STEP
  const HOVER_COLOR = 'rgba(10, 140, 45, 0.4)'
  const CLICK_COLOR = 'rgba(10, 140, 45, 0.6)'

  var data = require('../mapdata/tw_new.json')

  const mapRef = useRef(null)
  const [selectedFeature, setSelectedFeature] = useState(null)

  useEffect(() => {
    if (data) {
      const zoom = d3.zoom().scaleExtent(ZOOM_THRESHOLD).on('zoom', zoomHandler)

      function zoomHandler() {
        g.attr('transform', d3.zoomTransform(this))
        console.log(d3.zoomTransform(this))
      }

      const svg = d3
        .select(mapRef.current)
        .append('svg')
        .attr('id', 'map')
        .attr('width', '100%')
        .attr('height', '100%')

      const g = svg.call(zoom).append('g').attr('id', 'mapZoom')

      g.append('rect')
        .attr('width', WIDTH * OVERLAY_MULTIPLIER)
        .attr('height', HEIGHT * OVERLAY_MULTIPLIER)
        .attr(
          'transform',
          `translate(-${WIDTH * OVERLAY_OFFSET},-${HEIGHT * OVERLAY_OFFSET})`
        )
        .style('fill', 'none')
        .style('pointer-events', 'all')

      // Create a new projection
      const projection = d3
        .geoMercator()
        .center([121, 23.58])
        .scale(10000)
        .translate([WIDTH / 2, HEIGHT / 2])

      // Create a path generator
      const path = d3.geoPath(projection)

      // Draw the map
      g.selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('d', path)
        .style('fill', 'rgba(10, 140, 45, 0.2)')
        // .style('fill', function (d) {
        //   return d.properties.fill // replace with your own data value accessor
        // })
        .style('stroke', '#FFFFF2')
        .style('stroke-width', 0.5)
        .style('cursor', 'pointer')
        .on('mouseover', mouseOverHandler)
        .on('mouseout', mouseOutHandler)
        .on('click', clickHandler)

      // d3.select("svg").on("dblclick.zoom", null);

      d3.select(mapRef.current).on('click', clickReset)

      // function clickReset(e) {
      //   if (e.target.style.fill == 'none') {
      //     console.log('reset')
      //     svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
      //     d3.select(mapRef.current).selectAll("path").style("fill", "rgba(10, 140, 45, 0.2)");
      //   }
      //   // d3.select(mapRef.current)
      // }
    }

  }, [])

  const mouseOverHandler = function (d, i) {
    if (d3.select(this).style('fill') != CLICK_COLOR) {
      d3.select(this).style('fill', HOVER_COLOR)
    }
  }

  const mouseOutHandler = function (d, i) {
    if (d3.select(this).style('fill') != CLICK_COLOR) {
      d3.select(this).style('fill', 'rgba(10, 140, 45, 0.2)')
    }
  }

  const clickHandler = function (d, i, e) {
    d3.select(mapRef.current)
      .selectAll('path')
      .style('fill', 'rgba(10, 140, 45, 0.2)')
    // // console.log(d)
    d3.select(this).style('fill', CLICK_COLOR)
    // svg
    //   .transition()
    //   .duration(ZOOM_DURATION)
    //   .call(zoom.transform, d3.zoomIdentity.scale(1).translate(-130, -190))

    console.log(d3.select(this).style('fill'))

    // if(d3.select(this).style.fill=='none'){

    // }
  }

  const clickReset = function(e) {
    console.log(window.innerWidth, window.innerHeight)
    if(e.target.style.fill=='none'){
      console.log("hiclick")
      console.log(d3.select('#mapZoom'))
      d3.select('#mapZoom')
        .transition()
        .duration(750)
        .attr('transform','translate(0,0) scale(1)')

      d3.select(mapRef.current).selectAll("path").style("fill", "rgba(10, 140, 45, 0.2)");
    }
  }

  return (
    <>
      <NavbarIndex />
      <div ref={mapRef} id={`${IndexStyles['info']}`} onClick={clickReset}></div>
    </>
  )
}

export default KexinIndex
