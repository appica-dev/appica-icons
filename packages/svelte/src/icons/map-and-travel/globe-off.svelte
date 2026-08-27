<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.353 7.855a4 4 0 0 0 5.29 5.293m2.007-2.009a4 4 0 0 0-5.3-5.284M5.75 15.5a8.015 8.015 0 0 0 9.792.557m2.02-1.998A8.014 8.014 0 0 0 15 2.5m-4 15v4m-4 0h8M3 3.5l18 18\"/>";
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
