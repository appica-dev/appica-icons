<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m14.218 17.975 6.619-12.174M6.079 9.756l12.217-6.631M3 15a6 6 0 1 0 12 0 6 6 0 0 0-12 0m4 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
