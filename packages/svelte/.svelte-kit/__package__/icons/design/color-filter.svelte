<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.58 13.79c.27.68.42 1.43.42 2.21 0 1.77-.77 3.37-2 4.46m0 0A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79M12 20.46A5.93 5.93 0 0 0 16 22c3.31 0 6-2.69 6-6 0-2.76-1.88-5.1-4.42-5.79M6 8a6 6 0 1 0 12 0A6 6 0 0 0 6 8\"/>";
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
