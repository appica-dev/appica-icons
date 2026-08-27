<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16.437 16.44a3 3 0 0 0 4.123 4.123M22 18a3 3 0 0 0-3-3m-7 4v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3M3 3l18 18M2 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0M16 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
