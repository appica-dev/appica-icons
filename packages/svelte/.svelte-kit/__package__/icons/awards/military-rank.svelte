<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m10 13 2-1 2 1m-4 4 2-1 2 1m-4-8 2-1 2 1m4-2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7l6-4z\"/>";
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
