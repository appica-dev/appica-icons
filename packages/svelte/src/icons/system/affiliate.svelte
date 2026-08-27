<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m5.931 6.936 1.275 4.249m5.607 5.609 4.251 1.275m-5.381-5.752 5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m13 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m0 13a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-13-3a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0\"/>";
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
