<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3a9 9 0 1 1 0 18.001A9 9 0 0 1 12 3m0 0a2 2 0 0 0 0 4m-3 3h.01M15 10h.01M9.5 15a3.5 3.5 0 0 0 5 0\"/>";
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
