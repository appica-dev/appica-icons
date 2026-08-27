<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 8V6a3 3 0 0 1 3-3m-2 9 1 9m7-9-1 9m-8 0h10M5 8h14l-.621 2.485A2 2 0 0 1 16.439 12H7.561a2 2 0 0 1-1.94-1.515z\"/>";
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
