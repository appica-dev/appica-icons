<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 8V7a2 2 0 0 0-2-2h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2m4-2h2.333C17.91 18 20 15.697 20 12.857V12h-2.333C15.09 12 13 14.303 13 17.143zm0 0v3\"/>";
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
