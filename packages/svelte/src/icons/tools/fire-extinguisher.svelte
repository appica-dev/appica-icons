<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9a4 4 0 0 1 4-4m0 0V4M9 16h6M12 4l4 1m-4-1 4-1m-4 1H9a3 3 0 0 0-3 3\"/>";
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
