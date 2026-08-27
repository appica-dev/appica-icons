<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8 7 4-4m0 0 4 4m-4-4v5.394m0 0A6.74 6.74 0 0 1 9 14a6.74 6.74 0 0 0-3 5.606V21m6-12.606A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21\"/>";
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
