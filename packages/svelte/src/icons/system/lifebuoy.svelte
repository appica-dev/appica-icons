<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m15 15 3.35 3.35M9 15l-3.35 3.35m0-12.7L9 9m9.35-3.35L15 9m-7 3a4 4 0 1 0 8 0 4 4 0 0 0-8 0m-5 0a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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
