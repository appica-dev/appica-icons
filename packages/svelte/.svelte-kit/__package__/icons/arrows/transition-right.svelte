<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3m-9-9h8m0 0-3 3m3-3-3-3M3 18V6a3 3 0 1 1 6 0v12a3 3 0 0 1-6 0\"/>";
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
