<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.028 13.252C3.371 12.28 3 11.174 3 10c0-1.804.878-3.449 2.319-4.69m2.49-1.506A11.1 11.1 0 0 1 12 3c4.97 0 9 3.134 9 7 0 1.799-.873 3.44-2.307 4.68m-2.503 1.517c-1.331.537-2.755.81-4.19.803-1.913 0-3.686-.464-5.144-1.255M5 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0c0 1.42.316 2.805 1 4M3 3l18 18\"/>";
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
