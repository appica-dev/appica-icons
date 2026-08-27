<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6.412 17.589h4.548l9.098-9.098a3.215 3.215 0 1 0-4.549-4.549L6.412 13.04zm0 0L3 21M16.646 6.217 14.94 4.51m-1.705 5.117-1.706-1.706M9.823 13.04l-1.706-1.706\"/>";
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
