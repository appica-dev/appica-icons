<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M22 7S16.354 17 9.692 17c-3.226.025-6.194-1.905-7.692-5 1.498-3.095 4.466-5.025 7.692-5C16.354 7 22 17 22 17\"/>";
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
