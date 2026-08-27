<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m5 17 2-3m2-4 2-3m2 0 2 3m2 4 2 3m-4-3-2 3m-4-3 2 3M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-4 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m4 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m8 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0M2 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0m12-7a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
