<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 20H4M4 4v.01M8 4v.01M12 4v.01M16 4v.01M20 4v.01M4 8v.01M12 8v.01M20 8v.01M4 12v.01M8 12v.01m4-.01v.01m4-.01v.01m4-.01v.01M4 16v.01m8-.01v.01m8-.01v.01\"/>";
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
