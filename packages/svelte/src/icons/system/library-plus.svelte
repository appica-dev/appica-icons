<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.012 7.26A2 2 0 0 0 3 8.997v10c0 1.1.9 2 2 2h10c.75 0 1.158-.385 1.5-1M11 10h6m-3-3v6M7 5.667A2.667 2.667 0 0 1 9.667 3h8.666A2.667 2.667 0 0 1 21 5.667v8.666A2.67 2.67 0 0 1 18.333 17H9.667A2.667 2.667 0 0 1 7 14.333z\"/>";
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
