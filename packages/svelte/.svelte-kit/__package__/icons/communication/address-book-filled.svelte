<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill-rule=\"evenodd\" d=\"M5.25 16.75V18A2.75 2.75 0 0 0 8 20.75h10A2.75 2.75 0 0 0 20.75 18V6A2.75 2.75 0 0 0 18 3.25H8A2.75 2.75 0 0 0 5.25 6v1.25H4a.75.75 0 0 0 0 1.5h1.25v2.5H4a.75.75 0 0 0 0 1.5h1.25v2.5H4a.75.75 0 0 0 0 1.5zm9.694-3.806a2.75 2.75 0 1 0-3.887-3.889 2.75 2.75 0 0 0 3.887 3.89M14.25 11a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M16 15.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
