<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 0v6m-5.5 4.5L12 13m0 0 5.5 4.5M3 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
