<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.141 3.125A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v9m-.13 3.874A3 3 0 0 1 16 21H8a3 3 0 0 1-3-3V6a3 3 0 0 1 .128-.869m6.051 6.045a2.001 2.001 0 1 0 2.635 2.667M10 6h4M9 18h6M3 3l18 18\"/>";
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
