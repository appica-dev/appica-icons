<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 19.99h16M4 15.993v-.01m16 .01v-.01M4 11.995v-.01m16 .01v-.01M4 7.997v-.01m16 .01v-.01M4 4v-.01M8 4v-.01M12 4v-.01M16 4v-.01M20 4v-.01m-5 8.005H9m3-2.998v5.996\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
