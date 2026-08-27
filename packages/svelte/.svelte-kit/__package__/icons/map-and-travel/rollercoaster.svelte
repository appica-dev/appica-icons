<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.78 8.78 0 0 1 8.325-6H21m-1 0v12M8 21v-3m4 3V11m4-1.5V21M15 3h5v3h-5zM6 8l4-3 2 2.5-4 3-1.8-.5z\"/>";
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
