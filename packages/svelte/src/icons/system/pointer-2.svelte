<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.904 17.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093 4.907 4.907a1.066 1.066 0 0 0 1.509 0l1.047-1.047a1.066 1.066 0 0 0 0-1.509l-4.907-4.907 3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4z\"/>";
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
