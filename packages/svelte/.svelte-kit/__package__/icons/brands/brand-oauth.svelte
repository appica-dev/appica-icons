<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0m10.556-6c.65 0 1.235.373 1.508.947l2.839 7.848a1.647 1.647 0 0 1-1.01 2.108 1.673 1.673 0 0 1-2.068-.851L13.365 15h-2.73l-.398.905A1.67 1.67 0 0 1 8.26 16.95l-.153-.047a1.647 1.647 0 0 1-1.056-1.956l2.824-7.852a1.66 1.66 0 0 1 1.409-1.087z\"/>";
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
