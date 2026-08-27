<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.1 21.75a.975.975 0 1 1 0-1.95h.6l.244-1.95H4.2a1.95 1.95 0 0 1-1.95-1.95V4.2A1.95 1.95 0 0 1 4.2 2.25h15.6a1.95 1.95 0 0 1 1.95 1.95v11.7a1.95 1.95 0 0 1-1.95 1.95h-4.745l.243 1.95h.602a.975.975 0 1 1 0 1.95zm4.988-3.9h-2.177l-.244 1.95h2.665z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
