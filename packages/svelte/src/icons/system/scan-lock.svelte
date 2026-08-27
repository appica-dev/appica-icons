<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 7.75V5.625A2.125 2.125 0 0 1 5.625 3.5H7.75M3.5 16.25v2.125A2.125 2.125 0 0 0 5.625 20.5H7.75m8.5-17h2.125A2.125 2.125 0 0 1 20.5 5.625V7.75M16.25 20.5h2.125a2.125 2.125 0 0 0 2.125-2.125V16.25M9.875 10.938V8.812a2.125 2.125 0 0 1 4.25 0v2.126M7.75 12a1.063 1.063 0 0 1 1.063-1.062h6.374A1.06 1.06 0 0 1 16.25 12v3.188a1.06 1.06 0 0 1-1.062 1.062H8.811a1.06 1.06 0 0 1-1.062-1.062z\"/>";
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
